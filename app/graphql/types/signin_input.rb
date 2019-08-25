module Types
  class SigninInput < BaseInputObject
    argument :email, String, required: true
    argument :password, String, required: true
  end
end
