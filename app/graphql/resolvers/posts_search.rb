require "search_object/plugin/graphql"

class Resolvers::PostsSearch

  # include SearchObject for GraphQL
  include SearchObject.module(:graphql)

  # scope is starting point for search
  scope { Post.all }

  type [Types::PostType]

  # inline input type definition for the advance filter
  class PostFilter < Types::BaseInputObject
    argument :OR, [self], required: false
    argument :body_contains, String, required: false
  end

  # when "filter" is passed "apply_filter" would be called to narrow the scope
  option :filter, type: PostFilter, with: :apply_filter

  # apply_filter recursively loops through "OR" branches
  def apply_filter(scope, value)
    branches = normalize_filters(value).reduce { |a, b| a.or(b) }
    scope.merge branches
  end

  def normalize_filters(value, branches = [])
    scope = Post.all
    scope = scope.where("body LIKE ?", "%#{value[:body_contains]}%") if value[:body_contains]

    branches << scope

    value[:OR].reduce(branches) { |s, v| normalize_filters(v, s) } if value[:OR].present?

    branches
  end
end
