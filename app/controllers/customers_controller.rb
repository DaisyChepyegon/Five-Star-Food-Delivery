class CustomersController < ApplicationController
    before_action :authorize, only: [:show]

    def create
        customer = Customer.create(customer_params)
        if customer.valid?
            render json: customer, status: :created
        else
            render json: { errors: customer.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show 
        customer = Customer.find_by(id: session[:customer_id])
        render json: customer 
    end

    def authorize 
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :customer_id
    end

    private

    def customer_params 
        params.permit(:first_name, :second_name, :password, :password_confirmation)
    end
end
