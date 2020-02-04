interface PickUpColor {
  label: string;
  value: string;
}

export interface PickUp {
  color: PickUpColor;
  imageUrl: string;
}

export interface ServiceBot {
  name: string;
  displayName: string;
  animatedImageUrl: string;
  bio: string;
  playerType: string;
}

