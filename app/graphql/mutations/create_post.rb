module Mutations
  class CreatePost < BaseMutation
    # arguments passed to the `resolved` method
    argument :body, String, required: true

    # return type from the mutation
    type Types::PostType

    def resolve(body: nil)
      Post.create!(
        body: body,
        user: context[:current_user],
      )
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new(e.record.errors.messages)
    end
  end
end
