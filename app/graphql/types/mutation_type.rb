module Types
  class MutationType < BaseObject
    field :create_post, mutation: Mutations::CreatePost
  end
end
