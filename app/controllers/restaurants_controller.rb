class RestaurantsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    restaurant = Restaurant.all 
    render json: restaurant, include: :reviews
  end

  def show
    restaurant = find_restaurant
      render json: restaurant, include: :reviews
  end

  def create
    restaurant = Restaurant.create(restaurant_params)
      render json: restaurant, status: :created
  end

  def update
    restaurant = find_restaurant
      restaurant.update(restaurant_params)
      render json: restaurant
  end

  def destroy
    restaurant = find_restaurant
      restaurant.destroy
      head :no_content
  end

  private

  def restaurant_params
    params.permit(:name, :location)
  end

  def find_restaurant
    Restaurant.find(params[:id])
  end

  def render_not_found_response
    render json: {error: 'Restaurant not found'}, status: :not_found
  end


end
