# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  post_id    :bigint
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  belongs_to :user,
             class_name: "User",
             foreign_key: :user_id,
             primary_key: :id

  belongs_to :post,
             class_name: "Post",
             foreign_key: :post_id,
             primary_key: :id
end
