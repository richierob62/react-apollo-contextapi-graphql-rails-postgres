module Types
  class LikeType < BaseObject
    field :id, ID, null: false
    field :user, UserType, null: false
    field :post, PostType, null: false
  end
end
