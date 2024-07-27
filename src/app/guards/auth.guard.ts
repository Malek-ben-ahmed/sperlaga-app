import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
  const isValid = VerifiedUser() ;

  if (! isValid) {
    alert('Quelque chose n\'est pas correct');
  }
};
function VerifiedUser() {
  throw new Error('Function not implemented.');
}

