module Types
  class QueryType < BaseObject
    field :all_posts, resolver: Resolvers::PostsSearch
    field :ctx, String, null: true

    def ctx
      context[:session][:token]
    end
  end
end
