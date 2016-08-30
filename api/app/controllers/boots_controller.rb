class BootsController < ApplicationController
  #GET /boots
  def index
    @boots = Boot.all

    render json: @boots
  end
end
