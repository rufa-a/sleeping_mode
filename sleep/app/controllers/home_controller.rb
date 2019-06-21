class HomeController < ApplicationController
  skip_before_action :require_login, only: [:input]

  def input
  end

  def output
  end
end
