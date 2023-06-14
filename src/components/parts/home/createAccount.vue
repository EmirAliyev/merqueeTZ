<template>
  <div class="create__account">
    <label class="create__account-username" for="username">Username:</label>
    <Input styleClass="username" id="username" phTitle="Type your username" />
    <label class="create__account-password" for="password">Password:</label>
    <Input
      styleClass="password"
      id="password"
      type="password"
      phTitle="•••••••"
    />
    <Button styleClass="circle_create">CREATE ACCOUNT</Button>
  </div>
</template>
