module Types
  class PostType < BaseObject
    field :id, ID, null: false
    field :body, String, null: false
    field :posted_by, UserType, null: true, method: :user
  end
end
