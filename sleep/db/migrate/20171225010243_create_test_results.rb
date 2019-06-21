class CreateTestResults < ActiveRecord::Migration[5.1]
  def change
    create_table :test_results do |t|
      t.string :v1
      t.string :v2
      t.string :v3
      t.string :v4
      t.string :v5
      t.string :v6
      t.datetime :date
      t.belongs_to :user, index: true
      t.timestamps
    end
  end
end
