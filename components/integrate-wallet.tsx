"use client";

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { Address, Identity, EthBalance } from "@coinbase/onchainkit/identity";

export default function IntegrateWallet() {
  return (
    <Wallet>
      <ConnectWallet></ConnectWallet>
      <WalletDropdown className="w-full bg-green-600">
        <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
          <Address />
          <EthBalance />
        </Identity>
        <WalletDropdownDisconnect />
      </WalletDropdown>
    </Wallet>
  );
}
