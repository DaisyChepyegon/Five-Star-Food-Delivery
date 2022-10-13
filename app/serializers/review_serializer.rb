class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :reviews, :restaurant_id, :menu_id
end
