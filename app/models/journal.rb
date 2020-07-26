# == Schema Information
#
# Table name: journals
#
#  id          :integer          not null, primary key
#  content     :json
#  day_of      :datetime
#  fingerprint :string
#  location    :string
#  weather     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#
# Indexes
#
#  index_journals_on_user_id  (user_id)
#
class Journal < ApplicationRecord
    scope :with_user_id, ->(user_id) { where(user_id: user_id) }
    belongs_to :user
end
