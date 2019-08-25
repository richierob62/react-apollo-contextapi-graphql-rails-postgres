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
  belongs_to :user,
             class_name: "User",
             foreign_key: :user_id,
             primary_key: :id
end
