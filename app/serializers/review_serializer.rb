class ReviewSerializer < ActiveModel::Serializer
  attributes :id,:name, :rating, :reviews
end
