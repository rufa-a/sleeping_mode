class User < ApplicationRecord
  has_many :test_results, dependent: :destroy

  mount_uploader :avatar, AvatarUploader    #подрубаем uploader Avatar к модели User
  has_secure_password

  validates :username, presence: true, length: { maximum: 30 }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX }

  before_create :create_remember_token

  before_save { self.email = email.downcase }

  def User.new_remember_token
  	SecureRandom.urlsafe_base64
  end

  def User.encrypt(token)
  	Digest::SHA1.hexdigest(token.to_s)
  end

  private

  def create_remember_token
  	self.remember_token = User.encrypt(User.new_remember_token)
  end
end
