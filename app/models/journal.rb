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
    scope :with_user_id, ->(user_id) { where(user_id: user_id).order('created_at DESC') }
    belongs_to :user

    def journal_card_content
        questions = self.content["questions"]
        answers = self.content["answers"]
        result_str = ""
        i = 1
        while i < questions.size
            result_str += questions[i] + "\n" + answers[i] + "\n" if !answers[i].blank?
            i += 1
        end
        result_str
    end
end
