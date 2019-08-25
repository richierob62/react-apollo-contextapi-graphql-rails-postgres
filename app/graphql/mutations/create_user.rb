module Mutations
  class CreateUser < BaseMutation
    argument :signup_input, Types::SignupInput, required: true

    type Types::UserType

    def resolve(signup_input: nil)
      User.create!(
        name: signup_input&.[](:name),
        email: signup_input&.[](:email),
        password: signup_input&.[](:password),
      )
    end
  end
end
