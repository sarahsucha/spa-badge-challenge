class BootsController < ApplicationController
  #GET /boots
  def index
    @boots = Boot.all
    #There is a headers option here
    render json: @boots
  end



end
