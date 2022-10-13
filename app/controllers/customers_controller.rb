class CustomersController < ApplicationController
    before_action :authorize, only: [show]

    def Create
        customer = Customer.create(customer_params)
        if user.valid?
            render json: customer, status: :created
        else
            render json: { errors: customer.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show 
        customer = Customer.find_by(id: session[:customer_id])
        render json: customer 
    end


end
