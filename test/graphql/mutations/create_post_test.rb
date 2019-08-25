require "test_helper"

class Mutations::CreatePostTest < ActiveSupport::TestCase
  def perform(user: nil, **args)
    Mutations::CreatePost.new(object: nil, context: {}).resolve(args)
  end

  test "create a new post" do
    post = perform(
      body: "body",
    )

    assert post.persisted?
    assert_equal post.body, "body"
  end
end
