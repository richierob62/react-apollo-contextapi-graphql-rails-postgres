require "test_helper"

class Mutations::CreateUserTest < ActiveSupport::TestCase
  def perform(args = {})
    Mutations::CreateUser.new(object: nil, context: {}).resolve(args)
  end

  test "create new user" do
    user = perform(
      signup_input: {
        name: "foobar",
        email: "email@example.com",
        password: "[omitted]",
      },
    )

    assert user.persisted?
    assert_equal user.name, "foobar"
    assert_equal user.email, "email@example.com"
  end
end
