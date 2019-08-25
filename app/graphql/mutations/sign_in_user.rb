module Mutations
  class SignInUser < BaseMutation
    null true

    argument :signin_input, Types::SigninInput, required: false

    field :token, String, null: true
    field :user, Types::UserType, null: true

    def resolve(signin_input: nil)
      email = signin_input[:email]
      password = signin_input[:password]

      # basic validation
      return unless email && password

      user = User.find_by(email: email)

      # ensures we have the correct user
      return unless user
      return unless user.authenticate(password)

      # use Ruby on Rails - ActiveSupport::MessageEncryptor, to build a token
      crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
      token = crypt.encrypt_and_sign("user_id:#{user.id}")

      context[:session][:token] = token

      { user: user, token: token }
    end
  end
end
