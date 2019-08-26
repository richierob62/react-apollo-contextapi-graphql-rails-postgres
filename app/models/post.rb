# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#

class Post < ApplicationRecord
  validates :body, presence: true, length: { minimum: 5 }

  belongs_to :user,
             class_name: "User",
             foreign_key: :user_id,
             primary_key: :id

  has_many :likes,
           class_name: "Like",
           foreign_key: :post_id,
           primary_key: :id
end
