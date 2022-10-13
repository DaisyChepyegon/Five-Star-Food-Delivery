class MenusController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    menu = Menu.all 
    render json: menu, include: :reviews
  end

  def show
    menu = find_menu
    render json: menu, serializer: MenuwithreviewSerializer
  end

  def create
    menu = Menu.create(menu_params)
      render json: menu, status: :created
  end

  def update
    menu = find_menu
      menu.update(menu_params)
      render json: menu
  end

  def destroy
    menu = find_menu
      menu.destroy
      head :no_content
  end

  private

  def menu_params
    params.permit(:name, :location)
  end

  def find_menu
    Menu.find(params[:id])
  end

  def render_not_found_response
    render json: {error: 'Menu not found'}, status: :not_found
  end

end
