class SessionsController < ApplicationController
    def create 
        customer = Customer.find_by(first_name: params[:first_name])
        if customer&.authenticate(params[:password])
            session[:customer_id] = customer.id 
            render json: customer, status: :created 
        else
            render json: { error: "Invalid first_name or password" }, status: :unauthorized 
        end
    end

    def destroy
        session.delete :customer_id
        head :no_content
    end
end
