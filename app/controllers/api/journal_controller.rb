class Api::JournalController < ApplicationController
    skip_before_action :verify_authenticity_token
    # user_id
    def journals
        journals = Journal.with_user_id(params[:user_id])
        render json: journals, status:200
    end

    # user_id
    # fingerprint -- string
    # journal_response -- json
    # has some security risk
    def create
        begin
            user = User.find(params[:user_id])
            j = Journal.new()
            j.user_id = user.id
            j.content = JSON.parse(params[:journal_response])
            j.fingerprint = params[:fingerprint]
            j.save!
            render json: j, status:200
        rescue => exception
            return render json: {
                error: "Journal not created",
                status: 400
            }
        end
    end
end
