module Mutations
  class CreateUser < BaseMutation
    argument :signup_input, Types::SignupInput, required: true

    field :token, String, null: true
    field :user, Types::UserType, null: true

    def resolve(signup_input: nil)
      user = User.create!(
        name: signup_input&.[](:name),
        email: signup_input&.[](:email),
        password: signup_input&.[](:password),
      )

      raise ArgumentError, "Unable to create..." unless user

      # use Ruby on Rails - ActiveSupport::MessageEncryptor, to build a token
      crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
      token = crypt.encrypt_and_sign("user_id:#{user.id}")

      context[:token] = token

      { user: user, token: token }
    end
  end
end
