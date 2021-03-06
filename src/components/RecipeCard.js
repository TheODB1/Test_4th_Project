import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ShowMoreText from "react-show-more-text";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";


const RecipeCard = ({ recipe }) => {

  return (
    <>
      {/* ----Recipes Card using bootstrap components---- */}
      <Card className="card_recipes">
        <Link to={`/recipes/${recipe.id}`}>
          <Card.Img variant="top" src={recipe.image} />
        </Link>
        <Card.Body>
          <Link to={`/recipes/${recipe.id}`} className="default-link">
            <Card.Title>{recipe.name}</Card.Title>
          </Link>

          {/* ---- ShowMoreText component to show only first 200 characters of the description ---*/}
            <ShowMoreText
                lines={3}
                more="Show more"
                less="Show less"
                anchorClass=""  
                expanded={false}
                width={300}
            >
            <Card.Text>{recipe.description}</Card.Text>
            </ShowMoreText>

            {/* ---- Button to show more details of the recipe ----*/}
          <Button 
            variant="outline-secondary" 
            size="sm" 
            as={Link}
            to={`/recipes/${recipe.id}`}
          >Go To Recipe</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default RecipeCard;
