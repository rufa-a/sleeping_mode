class TestResult < ApplicationRecord
	belongs_to :user

	validates :v1, :v2, :v3, :v4, :v5, :v6, presence: true
end
