class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    review = Review.all 
    render json: review
  end

  def show
    review = find_reviews
      render json: review
  end

  def create
    review = Review.create(review_params)
      render json: review, status: :created
  end

  def update
    review = find_reviews
      review.update(review_params)
      render json: review
  end

  def destroy
    review = find_reviews
      review.destroy
      head :no_content
  end

  private

  def review_params
    params.permit(:name, :reviews, :rating, :restaurant_id, :menu_id)
  end

  def find_reviews
    Review.find(params[:id])
  end

  def render_not_found_response
    render json: {error: 'Menu not found'}, status: :not_found
  end

end
