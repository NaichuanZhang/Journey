class AddFingerPrintToJournal < ActiveRecord::Migration[6.0]
  def change
    add_column :journals, :fingerprint, :string
  end
end
