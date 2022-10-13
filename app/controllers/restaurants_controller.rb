class RestaurantsController < ApplicationController

  def index
    restaurant = Restaurant.all 
    render json: restaurant, include: :reviews
  end

  def show
    restaurant = Restaurant.find(params[:id])
    if restaurant
      render json: restaurant, include: :reviews
    else
      render json: {error: 'restaurant not found'}, status: :not_found
    end
  end

  def create
    restaurant = Restaurant.create(restaurant_params)
    if restaurant
      render json: restaurant, status: :created
    else
      render json: {error: 'restaurant not found'}, status: :not_found
    end
  end

  def update
    restaurant = Restaurant.find(params[:id])
    if restaurant
      restaurant.update(restaurant_params)
      render json: restaurant
    else
      render json: {error: 'restaurant not found'}, status: :not_found
    end
  end

  def destroy
    restaurant = Restaurant.find(params[:id])
    if restaurant
      restaurant.destroy
      head :no_content
    else
      render json: {error: 'restaurant not found'}, status: :not_found
    end
  end

  private

  def restaurant_params
    params.permit(:name, :location)
  end


end
