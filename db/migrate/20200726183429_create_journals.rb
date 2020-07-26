class CreateJournals < ActiveRecord::Migration[6.0]
  def change
    create_table :journals do |t|
      t.belongs_to :user, index: true
      t.datetime :day_of
      t.string :location
      t.string :weather
      t.json :content
      t.timestamps
    end
  end
end
