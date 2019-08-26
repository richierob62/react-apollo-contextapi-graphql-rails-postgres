require "test_helper"

class Mutations::CreatePostTest < ActiveSupport::TestCase
  def perform(user: nil, **args)
    Mutations::CreatePost.new(object: nil, context: { current_user: user }).resolve(args)
  end

  test "create a new post" do
    user = User.create!(
      name: "Test User",
      email: "email@example.com",
      password: "[omitted]",
    )

    post = perform(
      user: user,
      body: "body longer",
    )

    assert post.persisted?
    assert_equal post.body, "body longer"
  end
end
