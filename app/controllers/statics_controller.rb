class StaticsController < ApplicationController
  def index
  end
  
  def greeting
    @greetings = Greeting.all
    render json: {status: 'SUCCESS', message: 'Messages Loaded', data: @greetings}, status: :ok
  end
end
