require "test_helper"

module Resolvers
  class PostsSearchTest < ActiveSupport::TestCase
    def find(args)
      ::Resolvers::PostsSearch.call(nil, args, nil)
    end

    # those helpers should be handled with something like `factory_bot` gem
    def create_user
      User.create name: "test", email: "test@example.com", password: "123456"
    end

    def create_post(**attributes)
      Post.create! attributes.merge(user: create_user)
    end

    test "filter option" do
      post1 = create_post body: "test1"
      post2 = create_post body: "test2"
      post3 = create_post body: "test3"
      post4 = create_post body: "test4"

      result = find(
        filter: {
          body_contains: "test1",
          OR: [{
            body_contains: "test4",
            OR: [{
              body_contains: "test3",
            }],
          }, {
            body_contains: "test2",
          }],
        },
      )

      assert_equal result.map(&:body).sort, [post1, post2, post3, post4].map(&:body).sort
    end
  end
end
