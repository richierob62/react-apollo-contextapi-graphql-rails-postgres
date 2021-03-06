module Types
  class MutationType < BaseObject
    field :create_user, mutation: Mutations::CreateUser
    field :create_post, mutation: Mutations::CreatePost
    field :signin_user, mutation: Mutations::SignInUser
    field :create_like, mutation: Mutations::CreateLike
  end
end
