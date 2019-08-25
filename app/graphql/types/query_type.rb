module Types
  class QueryType < BaseObject
    # queries are just represented as fields
    field :all_posts, [PostType], null: false

    # tresolver for all_posts
    def all_posts
      Post.all
    end
  end
end
