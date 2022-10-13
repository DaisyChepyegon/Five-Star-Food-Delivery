class MenusController < ApplicationController

  def index
    menu = Menu.all 
    render json: menu, include: :reviews
  end

  def show
    menu = find_menu
    if menu
      render json: menu, serializer: MenuwithreviewSerializer
    else
      render json: {error: 'menu not found'}, status: :not_found
    end
  end

  def create
    menu = Menu.create(menu_params)
    if menu
      render json: menu, status: :created
    else
      render json: {error: 'menu not found'}, status: :not_found
    end
  end

  def update
    menu = find_menu
    if menu
      menu.update(menu_params)
      render json: menu
    else
      render json: {error: 'menu not found'}, status: :not_found
    end
  end

  def destroy
    menu = find_menu
    if menu
      menu.destroy
      head :no_content
    else
      render json: {error: 'menu not found'}, status: :not_found
    end
  end

  private

  def menu_params
    params.permit(:name, :location)
  end

  def find_menu
    Menu.find(params[:id])
  end

end
