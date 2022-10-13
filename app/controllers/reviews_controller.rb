class ReviewsController < ApplicationController

  def index
    review = Review.all 
    render json: review
  end

  def show
    review = find_reviews
    if review
      render json: review
    else
      render json: {error: 'review not found'}, status: :not_found
    end
  end

  def create
    review = Review.create(review_params)
    if review
      render json: review, status: :created
    else
      render json: {error: 'review not found'}, status: :not_found
    end
  end

  def update
    review = find_reviews
    if review
      review.update(review_params)
      render json: review
    else
      render json: {error: 'review not found'}, status: :not_found
    end
  end

  def destroy
    review = find_reviews
    if review
      review.destroy
      head :no_content
    else
      render json: {error: 'review not found'}, status: :not_found
    end
  end

  private

  def review_params
    params.permit(:reviews, :rating, :restaurant_id, :menu_id)
  end

  def find_reviews
    Review.find(params[:id])
  end

end
