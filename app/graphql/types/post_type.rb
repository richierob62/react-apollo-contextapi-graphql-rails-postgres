module Types
  class PostType < BaseObject
    field :id, ID, null: false
    field :body, String, null: false
  end
end
