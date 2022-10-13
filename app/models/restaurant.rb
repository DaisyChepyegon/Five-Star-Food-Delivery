class Restaurant < ApplicationRecord
  has_many :reviews
  has_many :menus, through: :reviews
end
