#!/bin/bash

# Check if stack already exists
if ! aws cloudformation describe-stacks --stack-name $1 --region us-east-1 2>/dev/null; then
  # Create stack if it doesn't exist
  aws cloudformation create-stack --stack-name $1 --template-body file://$2 --parameters file://$3 --capabilities "CAPABILITY_IAM" "CAPABILITY_NAMED_IAM" --region us-east-1
else
  # Update stack if it exists
  aws cloudformation update-stack --stack-name $1 --template-body file://$2 --parameters file://$3 --capabilities "CAPABILITY_IAM" "CAPABILITY_NAMED_IAM" --region us-east-1
fi
