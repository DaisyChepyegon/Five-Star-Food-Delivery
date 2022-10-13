class RestaurantsController < ApplicationController
  wrap_parameters format: []

  def index
    restaurant = Restaurant.all 
    render json: restaurant
  end

  def show
    restaurant = Restaurant.find(params[:id])
    if restaurant
      render json: restaurant
    else
      render json: (error: "Restaurant not Found"), status: :not_found
    end
  end

  def create
    restaurant = Restaurant.create(restaurant_params)
    if restaurant
      render json: restaurant, status: :created
    else
      render json: (error: "Restaurant not created"), status: :unprocessible_entity
    end
  end

  def update
    restaurant = Restaurant.find(params[:id])
    if restaurant
      Restaurant.update(restaurant_params)
      render json: restaurant
    else
      render json: (error: "Restaurant not updated"), status: :not_found
    end
  end

  def destroy
    restaurant = Restaurant.find(params[:id])
    if restaurant
      Restaurant.destroy
      head :no_content
    else
      render json: (error: "Restaurant not updated"), status: :not_found
    end
  end

  private

  def restaurant_params
    params.permit(:name, :location)
  end

end
