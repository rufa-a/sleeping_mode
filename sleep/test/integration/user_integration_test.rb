require 'test_helper'

class UserIntegrationTest < ActionDispatch::IntegrationTest

  test 'require login' do
    get home_output_path, params: { word: 1 }
    assert_redirected_to session_new_path
  end

  test 'get root after error sign in' do
    post session_create_path, params: { email: 'user@user.ru', password: 'password' }
    get session_new_path
    assert_response :success
  end

  test 'get root after success sign in' do
    #get users_new_path, params: {username: 'user', password: 'user', password_confirmation: 'user'}
    #get session_new_path, params: {username: 'user', password: 'user'}
    post users_path, params: { user: { username: 'user', password: 'password' } }
    get root_path
    assert_response :success
  end

  test 'create users' do
    old_count = User.count
    post users_path, params: { user: { username: 'user', email: 'user@user.ru', password: 'password', confirmation: 'password' } }
    new_count = User.count
    assert new_count > old_count
  end


  # fixtures :users

  # test "login and browse site" do
  #   # login via https
  #   https!
  #   # get "/users/new"
  #   # assert_response :success
  #   #
  #   # post_via_redirect "users/new",   params: { user: { username:  "Example User",
  #   #                                                    email: "user@example.com",
  #   #                                                    password:              "password",
  #   #                                                    password_confirmation: "password" } }
  #   # assert_equal 'root_path'
  #   # #assert_not_equal root_path
  #   # post_via_redirect "/session/new", :email => "roofinda@gmail.com",#users(:avs).username,
  #   #                   :password => "qwer"#users(:avs).password
  #   #assert_equal '/welcome', path
  #   # assert_equal 'Welcome avs!', flash[:notice]
  #   # https!(false)
  #   # get "/users"
  #   # assert_response :success
  #   # assert assigns(:products)
  # end
end
