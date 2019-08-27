module Types
  class UserType < BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :email, String, null: false
    field :likes, [LikeType], null: false
    field :posts, [PostType], null: false
    field :has_posts, Boolean, null: true

    def has_posts
      object.posts.size
    end
  end
end
