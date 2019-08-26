module Types
  class QueryType < BaseObject
    field :all_posts, resolver: Resolvers::PostsSearch
  end
end
